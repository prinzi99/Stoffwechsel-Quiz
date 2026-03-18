import { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Lock, LogIn, Eye, TrendingUp, Calendar, BarChart3, ShoppingCart, MousePointerClick } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";

const ANALYSE_PASSWORD = "10X5ist50";

interface LoginRow {
  id: string;
  logged_in_at: string;
  user_agent: string | null;
  referrer: string | null;
}

interface PageViewRow {
  id: string;
  page_path: string;
  page_title: string | null;
  viewed_at: string;
  user_agent: string | null;
  referrer: string | null;
}

const Analyse = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const [logins, setLogins] = useState<LoginRow[]>([]);
  const [pageViews, setPageViews] = useState<PageViewRow[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === ANALYSE_PASSWORD) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Falsches Passwort.");
    }
  };

  useEffect(() => {
    if (!authenticated) return;
    const fetchData = async () => {
      setLoading(true);
      const [loginsRes, viewsRes] = await Promise.all([
        supabase.from("bonus_logins").select("*").order("logged_in_at", { ascending: false }),
        supabase.from("bonus_page_views").select("*").order("viewed_at", { ascending: false }),
      ]);
      if (loginsRes.data) setLogins(loginsRes.data);
      if (viewsRes.data) setPageViews(viewsRes.data);
      setLoading(false);
    };
    fetchData();
  }, [authenticated]);

  // Stats
  const totalLogins = logins.length;
  const bonusPageViews = pageViews.filter((v) => !v.page_path.includes("anbot"));
  const totalBonusPageViews = bonusPageViews.length;

  const todayStr = new Date().toISOString().split("T")[0];
  const loginsToday = logins.filter((l) => l.logged_in_at.startsWith(todayStr)).length;
  const viewsToday = bonusPageViews.filter((v) => v.viewed_at.startsWith(todayStr)).length;

  // Angebot page stats
  const anbotViews = pageViews.filter((v) => v.page_path.includes("anbot")).length;
  const anbotViewsToday = pageViews.filter((v) => v.page_path.includes("anbot") && v.viewed_at.startsWith(todayStr)).length;

  const pageStats = useMemo(() => {
    const map: Record<string, { count: number; title: string }> = {};
    pageViews.forEach((v) => {
      const key = v.page_path;
      if (!map[key]) map[key] = { count: 0, title: v.page_title || v.page_path };
      map[key].count++;
    });
    return Object.entries(map)
      .map(([path, data]) => ({ path, ...data }))
      .sort((a, b) => b.count - a.count);
  }, [pageViews]);

  const loginsByDay = useMemo(() => {
    const map: Record<string, number> = {};
    logins.forEach((l) => {
      const day = l.logged_in_at.split("T")[0];
      map[day] = (map[day] || 0) + 1;
    });
    return Object.entries(map)
      .sort(([a], [b]) => b.localeCompare(a))
      .slice(0, 14);
  }, [logins]);

  if (!authenticated) {
    return (
      <>
        <Helmet>
          <title>Analyse | Philipp's Biohack</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Header />
        <main className="flex-grow flex items-center justify-center min-h-[60vh]">
          <Card className="w-full max-w-md mx-4">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-muted-foreground" />
                <span className="font-semibold text-foreground">Analysebereich</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Dieser Bereich ist passwortgeschützt.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="password"
                  placeholder="Passwort eingeben"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  className="h-12"
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button type="submit" variant="cta" size="lg" className="w-full" disabled={!password.trim()}>
                  Zugang öffnen
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Analyse – Dashboard | Philipp's Biohack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <section className="section-padding">
          <div className="container-narrow space-y-8">
            <div className="space-y-2">
              <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">
                Internes Dashboard
              </Badge>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Bonusbereich – Analyse
              </h1>
            </div>

            {loading ? (
              <p className="text-muted-foreground">Daten werden geladen…</p>
            ) : (
              <>
                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <KpiCard icon={LogIn} label="Logins gesamt" value={totalLogins} />
                  <KpiCard icon={Eye} label="Seitenaufrufe Bonuspage" value={totalBonusPageViews} />
                  <KpiCard icon={TrendingUp} label="Logins heute" value={loginsToday} />
                  <KpiCard icon={Calendar} label="Aufrufe heute" value={viewsToday} />
                  <KpiCard icon={ShoppingCart} label="Angebotsseite gesamt" value={anbotViews} />
                  <KpiCard icon={ShoppingCart} label="Angebotsseite heute" value={anbotViewsToday} />
                </div>

                {/* Page Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-secondary" />
                      Beliebteste Seiten
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {pageStats.length === 0 ? (
                      <p className="text-sm text-muted-foreground">Noch keine Daten vorhanden.</p>
                    ) : (
                      <div className="space-y-3">
                        {pageStats.map((page) => (
                          <div key={page.path} className="flex items-center justify-between gap-4">
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{page.title}</p>
                              <p className="text-xs text-muted-foreground truncate">{page.path}</p>
                            </div>
                            <Badge variant="secondary" className="shrink-0">
                              {page.count} Aufrufe
                            </Badge>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Logins by Day */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <LogIn className="w-5 h-5 text-secondary" />
                      Logins pro Tag (letzte 14 Tage)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {loginsByDay.length === 0 ? (
                      <p className="text-sm text-muted-foreground">Noch keine Daten vorhanden.</p>
                    ) : (
                      <div className="space-y-2">
                        {loginsByDay.map(([day, count]) => (
                          <div key={day} className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground w-28 shrink-0">{day}</span>
                            <div className="flex-1 bg-muted rounded-full h-5 overflow-hidden">
                              <div
                                className="bg-secondary h-full rounded-full transition-all"
                                style={{
                                  width: `${Math.max(5, (count / Math.max(...loginsByDay.map(([, c]) => c))) * 100)}%`,
                                }}
                              />
                            </div>
                            <span className="text-sm font-medium text-foreground w-8 text-right">{count}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const KpiCard = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: number }) => (
  <Card className="border-border/50">
    <CardContent className="p-4 md:p-5 space-y-2">
      <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-secondary" />
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </CardContent>
  </Card>
);

export default Analyse;

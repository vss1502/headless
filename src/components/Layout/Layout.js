import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
  },
};

export default function Layout({ children }) {
  return (
    <div style={styles.container}>
      <SiteHeader />
      <main style={styles.main}>{children}</main>
      <SiteFooter />
    </div>
  );
}
import styles from "./layout.module.css";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={styles.global}>{children}</body>
    </html>
  )
}

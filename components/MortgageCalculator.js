export default function Footer(){ 
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Better Replica — For Assignment</p>
        <nav>
          <a href="#">Privacy</a> | <a href="#">Terms</a> | <a href="#">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

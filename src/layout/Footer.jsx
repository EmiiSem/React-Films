function Footer() {
    return <footer className="page-footer green lighten-1">
    <div className="footer-copyright">
      <div className="container">
      <b>© {new Date().getFullYear()} React-Films</b>
      <a className="grey-text text-lighten-4 right" href="https://github.com/EmiiSem/React-Films" target="_blank"><b>Repo</b></a>
      </div>
    </div>
  </footer>
}

export {Footer}

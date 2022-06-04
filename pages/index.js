import { useEffect, useState } from "react"

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined)

  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  }

  useEffect(() => {
    if(darkTheme !== undefined) {
      if(darkTheme){
        document.documentElement.setAttribute("data-theme", "dark")
        window.localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    } 
  },[darkTheme])

  return (
    <div>
      <div className="container">
        <nav>
          <div className="title">
            <h1>Lorem Ipsum</h1>
          </div>
          <div>
            <form action="#">
              <label className="switch">
                <input type="checkbox" onClick={handleToggle} checked={darkTheme}/>
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
        <section>
          <div className="content">
            <h1>Lorem Ipsum🍣</h1>
            <h3>Why do we use it?</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <button className="primaryButton">CONTACT</button>
          </div>
        </section>
      </div>
    </div>
  )
}

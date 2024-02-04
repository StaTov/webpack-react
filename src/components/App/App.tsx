import style from "./App.module.css";

const App = () => {
   return (
      <div className={style.container}>
         Hello webpack!
         <div className={style.main}>
            i`m OK
         </div>
      </div>
   )
}

export default App;

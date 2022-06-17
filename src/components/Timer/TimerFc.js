/*
Napisz licznik, który będzie wyświetlał na stronie liczbę sekund,
 jakie upłynęły od momentu uruchomienia aplikacji. Czyli startujemy
 od 0, a następnie co jedną sekundę powinniśmy zaktualizować tę liczbę
 na ekranie.

Tips: przyda się wykorzystanie stanu komponentu

Tips: spróbuj napisać tę aplikację korzystają zarówno z klas jak i z
 komponentów funkcyjnych
*/
import {useState, useEffect} from "react";

const Timer = () => {

  const [time, setTime] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime((prev) => prev + 1);
		}, 1000);
		return () => clearInterval(timer);
	}, [time]);

    

  return <div>{<h2>It is {time}</h2>}</div>;
};

export default Timer;

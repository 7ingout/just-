import React, { useState } from 'react';

const Main = () => {
    const [ myName, setMyName ] = useState("김효진")

    function changeName() {
        setMyName(myName === "김효진" ? "KimHyojin" : "김효진");
    }

    return (
        <div>
			<h1>안녕하세요. {myName} 입니다.</h1>
			<button onClick={changeName}>Change</button>
        </div>
    );
};

export default Main;
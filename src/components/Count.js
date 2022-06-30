import React, { useState } from 'react';

const Count = (props) => {
    const [ count, setCount ] = useState(0);
    const updateCount = () => setCount(count + 1);
    const clearCount = () => setCount(0);
    return (
        <div>
            클릭한 횟수는 {count}번입니다.
            <div>
                <button onClick={updateCount}>클릭하세용</button>
                <button onClick={clearCount}>초기화하기</button>
            </div>
        </div>
    );
};

export default Count;
import { useState } from 'react';

function DiceMod() {
    const [mod, setMod] = useState('')

    let posMod = ''
    if (mod > 0) {
        posMod = '+';
    } else {
        posMod = '';
    };

    return (
        <div>
            <p id="modifier">Modifier: {posMod}{mod}</p>
            <form>
                <input type="number" onChange={(e) => setMod(e.target.value)}/>
            </form>
        </div>
    )
}

export default DiceMod;
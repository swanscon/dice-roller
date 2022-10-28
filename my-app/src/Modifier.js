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
            <p>Modifier: {posMod}{mod}</p>
            <form>
                <input type="number" id="modifier" onChange={(e) => setMod(e.target.value)}/>
            </form>
        </div>
    )
}

export default DiceMod;
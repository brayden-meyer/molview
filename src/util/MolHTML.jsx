function addSubscripts(formula) {
    const parts = [];
    let i = 0;

    while (i < formula.length) {
        if (/\d/.test(formula[i])) {
            let num = '';
            while (i < formula.length && /\d/.test(formula[i])) {
                num += formula[i++];
            }
            parts.push(<sub key ={i}>{num}</sub>);
        } else {
            parts.push(formula[i++]);
        }
    }

    return <>{parts}</>
}

export default addSubscripts
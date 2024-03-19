import GraphVisualization from './graph';

const Home = () => {
    const dot = `
    digraph G {
        layout=dot;
        rankdir=LR;
        nodesep=1.5;
        M -> A;
        A -> B [label="0"];
        A -> C [label="1"];
        B -> C [label="0"];
        C [shape=doublecircle];
        M [shape=plaintext];
    }
    `;
    return (
        <div style={{display:'flex', flexDirection:"column", alignItems:"center", gap:"1rem", padding:"1rem"}}>
            <h1>Finite Automata</h1>
            <GraphVisualization dot={dot} />
        </div>
    );
}


export default Home;
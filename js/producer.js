//f(x) = A sin(wt + p)

function myData() {
    var series1 = [];
    for(var i =1; i < 1000; i ++) {
        series1.push({
            x: i, y: 2*Math.sin(i/3)
        });
    }

    var series2 = [];
    for(var i =1; i < 1000; i ++) {
        series1.push({
            x: i, y: Math.sin(i/3 + 1)
        });
    }
    return [
        {
            key: "Series #1",
            values: series1,
            color: "#0000ff"
        },
        {
            key: "Series #2",
            values: series2,
            color: "#000f0f"
        }
    ];
}

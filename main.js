google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

    function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', '');
        data.addColumn('string', 'Experience');
        data.addRows([
            ["Languages", "Python 3 ~ HTML5 ~ CSS ~ JavaScript ~ C++"],
            ["Software", "VSCode ~ PyCharm ~ Brackets ~ Git ~ Asana ~ MS Office ~ Adobe Creative Suite ~ Mixcraft 8 Pro Studio ~ Audacity"],
            ["Online Resources", "GitHub ~ CodePen ~ Repl.it ~ Weebly"],
            ["Concepts", "Object Oriented Programming ~ UX ~ UI ~ Procedural Programming"],
            ["Platforms", "Windows ~ Ubuntu"],
        ]);

        var cssClassNames = {
            headerRow: 'header-row-style',
            tableRow: 'row-style',
            oddTableRow: 'odd-row-style',
            headerCell: 'header-cell-style'
          };

        var style_options = {
            width: 2000,
            height: 200,
            
            chart: {
                title:"Hard Skills",
                subtitle: "Hard Skills pertaining to the programming, marketing, and creative industries.",
            },
            allowHtml: true,
            cssClassNames: cssClassNames
        }
    
        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, style_options, {showRowNumber: true, width: '100%', height: '100%'}, {backgroundColor: {fill: "#000000"}},);
        
    }

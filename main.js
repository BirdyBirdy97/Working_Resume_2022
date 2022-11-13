google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

    function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', '');
        data.addColumn('string', 'Experience');
        data.addRows([
            ["Languages", "Python 3, HTML5, CSS, JavaScript, C++"],
            ["Software", "VSCode, PyCharm, Brackets, Git, MS Office, Adobe Creative Suite, Mixcraft 8 Pro Studio, Audacity"],
            ["Online Resources", "GitHub, CodePen, Repl.it"],
            ["Concepts", "Object Oriented Programming, UX, UI, Procedural Programming"],
            ["Platforms", "Kali Linux, Windows"],
        ]);

        var style_options = {
            width: 2000,
            height: 350,
            chart: {
                title:"Hard Skills",
                subtitle: "Hard Skills pertaining to the programming, marketing, and creative industries.",
            },
        }
    
        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, style_options, {showRowNumber: true, width: '100%', height: '100%'}, {backgroundColor: {fill: "#000000"}},);
        
    }

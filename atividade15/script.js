/* Variables */
const select = document.getElementById("courses");

/* Main Functions */

function handleSelectOnChange() {
    const question = confirm("Deseja abrir uma janela com as informações do curso?");

    if (question) {
        var value = select.options[select.selectedIndex].value;
        var url = "";

        switch (value) {
            case "ads":
                url = "https://www.fatecsorocaba.edu.br/curso_ads.asp";
                break;
            case "ea":
                url = "https://www.fatecsorocaba.edu.br/curso_ea.asp";
                break;
            case "fm":
                url = "https://www.fatecsorocaba.edu.br/curso_fm.asp";
                break;
            case "ge":
                url = "https://www.fatecsorocaba.edu.br/curso_ead-ge.asp";
                break;
            case "gq":
                url = "https://www.fatecsorocaba.edu.br/curso_gq.asp";
                break;
            case "log":
                url = "https://www.fatecsorocaba.edu.br/curso_log.asp";
                break;
            case "ma":
                url = "https://www.fatecsorocaba.edu.br/curso_ma.asp";
                break;
            case "pm":
                url = "https://www.fatecsorocaba.edu.br/curso_pm.asp";
                break;
            case "pol":
                url = "https://www.fatecsorocaba.edu.br/curso_pol.asp";
                break;
            case "proj":
                url = "https://www.fatecsorocaba.edu.br/curso_proj.asp";
                break;
            case "sb":
                url = "https://www.fatecsorocaba.edu.br/curso_sb.asp";
                break;
            default:
                break;
        }

        window.open(url, "", "width=600,height=300");
    }
}

function sortList() { 

    arr = new Array(); 
    for(i = 0; i < select.length; i++) { 
        arr[i] = select.options[i]; 
    } 

    arr.sort(function(a,b) {
        return (a.text > b.text)? 1 : ((a.text < b.text)? -1 : 0);
    }); 

    for(i = 0; i < lb.length; i++) { 
        select.options[i] = arr[i];
    }
}

sortList();
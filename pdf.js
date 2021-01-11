var modal = document.getElementById('simplemodal');
function openmodal(){
    modal.style.display = 'block';
}
function validate(){
    var check = true;
    var name = document.getElementById("i_field").value;
    if (name == "") {
    alert("candidate name is required");
    check = false;
    return false;   
    }
     var college = document.getElementById("college_name").value;
    if (college == "") {
    alert("college name is required");
    check = false;
    return false;   
    }
    var email_id = document.getElementById("email_address").value;
    if (email_id == "") {
    alert("email name is required");
    check = false;
    return false;   
    }
    var duration = document.getElementById("time").value;
    if  (duration == "") {
    alert("Duration is required");
    check = false;
    return false;   
    }
    var stipend = document.getElementById("money").value;
    if  (stipend == "") {
    alert("stipend is required");
    check = false;
    return false;   
    }
    var supervisor = document.getElementById("supr_name").value;
    if  (supervisor == "") {
    alert("supervisor name is required");
    check = false;
    return false;   
    }
    var jbp = document.getElementById("jbp").value;
    if  (jbp == "") {
    alert("supervisor name is required");
    check = false;
    return false;   
    }
    if (check) {

        var modalbtn = document.getElementById('modalbtn');
        modalbtn.addEventListener('click', openmodal);

        document.getElementById("candi_name").innerHTML  = name;
            document.getElementById("collegename").innerHTML  =  college;
            document.getElementById("email").innerHTML  =  email_id;
            document.getElementById("time_duration").innerHTML  =  duration;
            document.getElementById("money_stipend").innerHTML  =  stipend;
            document.getElementById("super_visor").innerHTML  =  supervisor;
            document.getElementById("job_profile").innerHTML  =  jbp;
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
    }
}

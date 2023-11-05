const result=document.querySelectorAll('.counter');

const speed=10;

result.forEach(counter=>
    {
        const updatecount=()=>
        {
        const target=+counter.getAttribute('data-target');
        const a_1=+counter.innerText;
        const inc=target/speed;


        if(a_1<target)
        {
            counter.innerText=a_1+inc;
            setTimeout(updatecount,1000)
        }
        else{
            counter.innerText=target;
        }
        }
        updatecount();
    })
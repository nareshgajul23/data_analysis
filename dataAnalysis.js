const data1 = [{firstName:"Tirth", lastName:"shah", age:23}, 
{firstName:"Abhishek", lastName:"pathak", age:25}, 
{firstName:"Riya", lastName:"patel", age:24},
{firstName:"Bhala", lastName:"batuk", age:18},
{firstName:"Khalnayak", lastName:"Kalia", age:24}];

for(let i=0; i<data1.length; i++)
{
    if(data1[i].age >= 24)
    {
        console.log(data1[i].firstName +" "+ data1[i].lastName);
    } 
}


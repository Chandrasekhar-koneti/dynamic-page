giconsole.log('person 1 : shows ticket')
console.log('person2: shows ticket')
const premovie= async()=>
{
    const promisewifebringstic= new Promise((resolve,reject)=>
    {
        setInterval(()=>{resolve('ticket')},3000);
    });

    const getpop=new Promise((resolve,reject)=>{resolve('popcorn')})

    const addbutter=new Promise((resolve,reject)=>{resolve('butter')})

    const addcolddrinks= new Promise((resolve,reject)=>{resolve('colddrink')})

    let ticket=await promisewifebringstic;
    let [pop,butter,colddrinks]=await Promise.all([getpop,addbutter,addcolddrinks])
    console.log(`${pop},${butter},${colddrinks}`);
    // console.log(`wife: I have ${ticket}`)
    // console.log('husband: lets go inside')
    // console.log('wife: no iam hungry')

    // let popcorn= await getpop;
    // console.log(`husband: i got some${popcorn}`)
    // console.log('husband:lets go now')
    // console.log('wife: i need butter')

    // let butter= await addbutter;
    // console.log(`husband: i got ${butter}`)
    // console.log('husband: do you need anything')
    // console.log('wife:i need cold drink')

    // let coldrink=await addcolddrinks;
    // console.log(`husband: i got ${coldrink}`)
    // console.log('wife:lets go its too late')

    return ticket;
}
premovie().then((mx)=>console.log(`person 3:shows${mx}`))

    console.log('perosn4:shows ticket')
    console.log('person5: shows ticket')


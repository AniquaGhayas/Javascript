const a = [5, 15, 19, 14, 9, 6]
let largest=a[0]
const length=a.length
for(i=1;i<a.length;i++)
{
    if (a[i]>largest)
    {
        largest=a[i]
    }
}
console.log("the largest element is:", largest);

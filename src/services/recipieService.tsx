export async function fetchRecipieCategories(){
    try{
    const promiseObj = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    console.log(promiseObj);
    const category = await promiseObj.json();
    console.log(category.categories);
    if(promiseObj.ok){
        //throw error
         return category.categories;
    }
    }catch(ex:any){
        console.log("exception occured.." + ex)
    }
  
}
// 예시 데이터 배열
const foodList = [
  {
    name: 'food1',
    image: 'url'
  },
  {
    name: 'food2',
    image: 'url2'
  },
  {
    name: 'food3',
    image: 'url3'
  },
]
function FoodApp() {
  return (
    <div>
      <span>Food List</span>
      <FoodProp fav="kimchi" />
      <FoodProp fav="ramyeon" />
      {foodList.map(dish => <FoodMap name={dish.name} image={dish.image} />)}
    </div>
  );
}
function FoodProp({fav}) { //구조분해할당으로 props.fav 간략화
  //props 로 받고 { fav } = props 와 같이도 표현 가능
  return(
      <>
      <strong>My favorite food is {fav}</strong><br />
      </>
  );
}

function FoodMap({name, image}){
  return(
      <>
      <strong>My favorite food is {name}, {image}</strong><br />
      </>
  );
}


export default FoodApp;

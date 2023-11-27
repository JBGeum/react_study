import PropTypes from 'prop-types';

// 예시 데이터 배열
const foodList = [
  {
    id: 1, // key props를 위해 설정. 리액트 내부에서 사용되는 특수한 props이므로 컴포넌트에 직접 전달되지는 않음
    name: 'food1',
    image: 'url',
    rating: 5,
  },
  {
    id: 2,
    name: 'food2',
    image: 'url2',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'food3',
    image: 'url3',
    rating: 3,
  },
];
// ESLint: 'renderFood' was used before it was defined.(no-use-before-define)
// 먼저 선언한 뒤 사용하기
function renderFood(dish) {
  return <FoodMap name={dish.name} image={dish.image} />;
}

function FoodApp() {
  return (
    <div>
      <span>Food List</span>
      <FoodProp fav="kimchi" />
      <FoodProp fav="ramyeon" />
      {foodList.map(dish => (
        <FoodMap
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
      {foodList.map(renderFood)}
    </div>
  );
}

function FoodProp({ fav }) {
  // 구조분해할당으로 props.fav 간략화
  // props 로 받고 const { fav } = props 와 같이도 표현 가능
  return (
    <>
      <strong>My favorite food is {fav}</strong>
      <br />
    </>
  );
}

function FoodMap({ name, image, rating }) {
  return (
    <>
      <strong>
        My favorite food is {name}, {image}, {rating}
      </strong>
      <br />
    </>
  );
}

// import한 후 component.propTypes 설정
FoodMap.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
export default FoodApp;

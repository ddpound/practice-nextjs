const Hello = ({name, style})=>{
    return (
    <div style={style}>
        안녕하세요 저는 {name} 입니다.
    </div>)
}

// 기본 props를 지정해줄수 있음
Hello.defaultProps = {
    name: '이름없음'
}
  

export default Hello;
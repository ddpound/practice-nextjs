import Hello from "../components/Hello";
import Wrapper from "../components/Wrapper";

export default function reactPractice(){
    const name = "네임 아무거나 입력";
    
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
      }

    return (
        <>
            <div>리액트 연습페이지 입니다.</div>
            <Hello name={name}/>
            <Hello name={"유성중"}/>
            <Hello name={"스타일 넣어봄"} style={style}/>
            <Hello/>

            <hr/>
            
            <h4>와퍼 테스트 페이지 입니다 children이 핵심입니다.</h4>

            <Wrapper>
                <div>보이나요?</div>
            </Wrapper>
        </>
    )
}
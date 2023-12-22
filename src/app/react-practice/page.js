'use client'

import Wrapper from "../components/Wrapper";
import { useState, useRef } from "react";
import UserList from "../components/UserList";
import CreateUser from "../components/CreateUser";

function User({ user }) {
    return (
      <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
  }


export default function reactPractice(){
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
      });

    const { username, email } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
   
    
    const style = {
        color: `black`,
        height: 1200,
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
      }

      const [users, setUsers] = useState([
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active: true
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active: false
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com',
          active: false
        },
        {
          id: 4,
          username: 'ysj',
          email: 'ysj@example.com',
          active: false
        }
      ]);

      const nextId = useRef(5);
      const onCreate = () => {
        // 나중에 구현 할 배열에 항목 추가하는 로직
        const user = {
            id: nextId.current,
            username,
            email
          };
        setUsers([...users, user]);
        setInputs({
            username: '',
            email: ''
          });

        console.log(nextId.current)
        nextId.current += 1;
      };

      const onRemove = id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id 가 id 인 것을 제거함
        setUsers(users.filter(user => user.id !== id));
      };

      const onToggle = id => {
        setUsers(
          users.map(user =>
            user.id === id ? { ...user, active: !user.active } : user
          )
        );
      };

    return (
        <div >
            <div>리액트 연습페이지 입니다.</div>

            <hr/>
            
            <h4>와퍼 테스트 페이지 입니다 children이 핵심입니다.</h4>

            <Wrapper>
                <div>보이나요?</div>
            </Wrapper>

            <hr/>
            
            <div style={style}>

                <hr/>
                <h4>배열 렌더링</h4>
                
                <CreateUser 
                    username={username}
                    email={email}
                    onChange={onChange}
                    onCreate={onCreate}
                />
                <UserList users={users} onRemove = {onRemove} onToggle={onToggle}/>
            </div>
            <button>포커스 체크를 위한 초기화</button>
        </div>
    )
}
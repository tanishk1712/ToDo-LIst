import React, { useState } from 'react';
import './TodoList.css'
const AddList = () => {
    const [memberName, setMemberName] = useState('');
    const [members, setMembers] = useState([]);

    const handleAddMember = () => {
        if (memberName.trim() !== '') {
            setMembers([...members, memberName]);
            setMemberName('');
        }
    };

    const handleDeleteMember = (index) => {
        const updatedMembers = [...members];
        updatedMembers.splice(index, 1);
        setMembers(updatedMembers);
    };
    
    


    return (
        <>
            <div className='addlist'>
                <input
                    type="text"
                    placeholder="Enter member name"
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value)}
                />
                <button onClick={handleAddMember}>
                    <svg width="30px" height="30px" viewBox="0 0 42.989 42.989" xmlns="http://www.w3.org/2000/svg">
                        <path id="add" d="M631.793,354.3a3.1,3.1,0,0,1-2.491,2.491,133.9,133.9,0,0,1-35.627,0,3.1,3.1,0,0,1-2.491-2.491,133.9,133.9,0,0,1,0-35.627,3.1,3.1,0,0,1,2.491-2.491,133.9,133.9,0,0,1,35.627,0,3.1,3.1,0,0,1,2.491,2.491A133.9,133.9,0,0,1,631.793,354.3Zm-5.884-19.141c-3.97-.29-7.939-.43-11.909-.474-.031-4.206-.18-8.412-.487-12.619a1.311,1.311,0,0,0-2.622,0c-.307,4.2-.455,8.4-.487,12.606-4.2.032-8.4.18-12.606.487a1.312,1.312,0,0,0,0,2.622c4.206.307,8.412.456,12.619.487.044,3.97.184,7.939.474,11.909a1.311,1.311,0,0,0,2.622,0c.29-3.974.43-7.948.475-11.922,3.974-.044,7.948-.184,11.922-.474a1.312,1.312,0,0,0,0-2.622Z" transform="translate(-589.994 -314.994)" fill="#2d5be2" />
                    </svg>

                </button>

            </div>
            <div>
            <hr/>
                {members.map((member, index) => (

                    <div className='memberContainer' key={index}>
                       <div className='index'>
                       {index + 1} :
                       </div>
                        <div className='member'>
                            
                             {member}
                        </div>
                        <div className='edit-BTN'>
                            
                           
                            <button onClick={()=> handleDeleteMember(index)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z" />
                                    <line x1="18" y1="9" x2="12" y2="15" />
                                    <line x1="12" y1="9" x2="18" y2="15" />
                                </svg>
                            </button>
                        </div>
                        
                    </div>
                         

                ))}
                <hr />

            </div>
        </>
    )
}
export default AddList;
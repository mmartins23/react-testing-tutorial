import { SkillsProps } from './Skills.type'
import { useState } from 'react'

export const Skills = ({ skills }: SkillsProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>
                })}
            </ul>
            {isLoggedIn ? (
                <button>Start learning</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </>
    )
}
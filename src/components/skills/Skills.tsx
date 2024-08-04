import { SkillsProps } from './Skills.type'

export const Skills = ({skills}: SkillsProps) => {
    return (
        <>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>
                })}
            </ul>
        </>
    )
}
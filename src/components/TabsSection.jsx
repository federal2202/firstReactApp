import Button from "./Button/button"

export default function TabsSection({active, onChange}) {
    
    return (
        <section style={{marginBottom: '1rem'}}>
            <Button isActive={active==='main'} onClick={() => onChange('main')}>Main</Button>
            <Button isActive={active==='feedback'} onClick={() => onChange('feedback')}>feedback</Button>
            <Button isActive={active==='effect'} onClick={() => onChange('effect')}>effect</Button>
        </section>
    )
}
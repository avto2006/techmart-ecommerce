interface CustomButtonProps {
    label: string,
    onClick: () => void,
    variant?: "primary" | "secondary"
}


const CustomButton = ({label, onClick, variant}: CustomButtonProps ) => {
    return (
        
          <button onClick={onClick}>{label}</button>
        
    )
}


<CustomButton onClick={() => console.log("Clicked")} label={""} variant="primary"/>

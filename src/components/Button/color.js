const BUTTON_COLORS = (color) => {
    switch(color){
        case 'success':
            return '#18ce0f'
        case 'danger':
            return '#ff3636'
        case 'primary':
            return '#f96332'
        case 'info':
            return '#2ca8ff'
        case 'warning':
            return '#ffb236'
        default: 
            return '#888888'
    }
}

export default BUTTON_COLORS
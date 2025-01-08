interface CircularProgressBarProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage, size = 100, strokeWidth = 10 }) => {
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    const getColor = (percentage: number) => {
        if (percentage <= 10) {
            return '#FF1A1A'; // Rojo vibrante
        } else if (percentage <= 30) {
            return '#FF4D4D'; // Rojo más suave y vibrante
        } else if (percentage <= 50) {
            return '#FF8C1A'; // Naranja vibrante
        } else if (percentage <= 70) {
            return '#FFB31A'; // Amarillo-anaranjado vibrante
        } else if (percentage <= 80) {
            return '#00E676 '; // Verde claro vibrante
        } else {
            return '#5CFF5C'; // Verde intenso vibrante
        }
    };

    const color = getColor(percentage);

    return (
        <div className='flex items-center justify-center relative'>
            <svg width={size} height={size} className='transform -rotate-90'>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke='#E5E7EB' // Fondo (gris claro)
                    strokeWidth={strokeWidth}
                    fill='none'
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color} // Color dinámico
                    strokeWidth={strokeWidth}
                    fill='none'
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap='round' // Bordes redondeados
                />
            </svg>
            <div className='absolute flex items-center justify-center'>
                <span className='text-xs font-normal text-gray-700'>{percentage}%</span>
            </div>
        </div>
    );
};

export default CircularProgressBar;

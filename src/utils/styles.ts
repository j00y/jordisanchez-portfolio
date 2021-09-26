export type ClassMap = { [value: string]: boolean };
export const getClassNames = (classMap: ClassMap): string =>
  Object.keys(classMap)
    .filter((styleClass) => classMap[styleClass])
    .join(" ");


// animation: fadeIn 2s ease-in-out alternate-reverse infinite;
// @keyframes fadeIn {
//     0% { opacity: 0 }
//     20% { opacity: 1 }
//     80% { opacity: 1 }
//     100% { opacity: 0 } 
// }

// background-image: ${props => `url(${props.src})`};
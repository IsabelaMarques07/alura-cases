//para o componente novo a ser criado não tenha o mesmo nome do componente do próprio Next, podemos colocar um outro nome na importação
import NextLink from 'next/link'
import LinkEstilizado from '../LinkEstilizado'

export default function Link({children, href, ...props}){
    return(
        <NextLink passHref href={href}>
            <LinkEstilizado {...props}>{children}</LinkEstilizado>
        </NextLink>
    )
}
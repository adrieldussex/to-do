export default function Header() {
    const user = {name: 'Adriel'}

    return (
        <header className="flex flex-col w-full">
            <h1 className="text-3xl font-bold">¡Hola, {user.name}!</h1>
            <h2 className="text-lg">Hoy es Domingo, 16 de Julio.</h2>
        </header>
    )
}
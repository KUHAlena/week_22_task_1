export default function UserItem({name, universe, alterego, occupation, friends, superpowers, url, info}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Вселенная: {universe}</p>
            <p>Альтер эго: {alterego}</p>
            <p>Род занятий: {occupation}</p>
            <p>Друзья: {Array.isArray(friends) ? friends.join(", ") : friends}</p>
            <p>Суперспособности: {Array.isArray(superpowers) ? superpowers.join(", ") : superpowers}</p>
            <img src={url} alt={name} />
            <p>Информация: {info}</p>
        </div>
    )
}

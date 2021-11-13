export default function specialAttacks(character) {
    let characterSpecial = [];
    for (const item of character.special) {
        const {id, name, icon, description = 'Засекречено'} = item;
        characterSpecial.push({
            id, name, icon, description,
        });
    }
    return characterSpecial;
}
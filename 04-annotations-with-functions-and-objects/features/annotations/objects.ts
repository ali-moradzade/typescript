const profile = {
    name: 'alex',
    age: 20,
    coordinates: {
        lat: 0,
        lng: 15,
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const {age}: { age: number } = profile;
console.log(age);

const {
    coordinates: {lat, lng}
}: { coordinates: { lat: number; lng: number } } = profile;

console.log({
    lat,
    lng
});

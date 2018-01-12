#### test with mocha:

![capture d ecran 2018-01-11 a 11 46 24](https://user-images.githubusercontent.com/13906612/34821787-1ab9499c-f6c5-11e7-8a30-5f86b4dfc230.png)

test example with mocha:

```js
class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

let car;

beforeEach(() => {
    car = new Car();
});

describe('Car', () => {
    it('can park', () => {
        assert.equal(car.park(), 'stopped');
    });

    it('can drive', () => {
        assert.equal(car.drive(), 'vroom');
    });
});
```

#### mocha structure:

![capture d ecran 2018-01-11 a 15 15 47](https://user-images.githubusercontent.com/13906612/34829867-5791621a-f6e2-11e7-87a0-66c07ea46e18.png)

#### web3:

![capture d ecran 2018-01-11 a 15 37 06](https://user-images.githubusercontent.com/13906612/34830809-4eceb774-f6e5-11e7-8b2e-6cc03947bdb5.png)

#### web3 With Contracts:

![capture d ecran 2018-01-11 a 15 42 16](https://user-images.githubusercontent.com/13906612/34831031-0751d902-f6e6-11e7-9159-f7fdd7053f32.png)

#### infura:

![capture d ecran 2018-01-11 a 16 18 01](https://user-images.githubusercontent.com/13906612/34832909-6fb9c51a-f6ee-11e7-92f7-2137b4a0b1b4.png)


[INFURA](https://infura.io/)

#### Etherscan:

[Etherscan](https://rinkeby.etherscan.io/)

#### Deployed Contracts in Remix:

https://remix.ethereum.org

![capture d ecran 2018-01-11 a 16 59 01](https://user-images.githubusercontent.com/13906612/34833879-c4eb88d2-f6f0-11e7-9998-ecdcff9c94f5.png)

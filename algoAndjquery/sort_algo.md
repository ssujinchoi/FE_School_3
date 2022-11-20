## 정렬 알고리즘

### 선택 정렬
- **처리되지 않은 데이터 중**에서 가장 작은 원소를 선택해 맨 앞에 있는 원소와 바꾸는 것을 반복
1. 배열에서 min의 위치(인덱스)를 변수에 저장
2. 스왑 (min을 첫 번째 인덱스로 옮기고 첫 번재 인덱스의 값은 min의 원래 위치에 옮김)
3. 첫 번째 값은 정해졌으므로 그 인덱스를 제외하고 다음 인덱스부터 반복한다.
4. n-1만큼의 비교를 하지만 n번의 스왑을 하지는 않음(최악의 경우)
5. 시간복잡도는 O(n^2)

```js
    let arr = [22, 4, 3, 4, 10, 9, 88]

    for(let i = 0; i < arr.length; i++) {
        let minIndex = i // 먼저, 0번째 인덱스가 가장 작다고 가정하고 시작
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        let tmp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = tmp
    }

    console.log(arr)
```
<br>

### 삽입정렬
- 첫 번째 원소는 그 자체로 정렬되어 있다고 판단하고, 두 번째 원소부터 시작하여 그 앞(왼쪽)의 원소들과 비교해가며, 작다면 앞(왼)쪽 크다면 그대로 놔두는 것을 반복

```js
    let arr = [22, 4, 3, 4, 10, 9, 88]

    for(let i = 1; i < arr.length; i++) {
        for(let j = i; j > 0; j--) {
            if(arr[j] < arr[j-1]) {
                let tmp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = tmp;
            } else break;
        }
    }

    console.log(arr)
```
<br>

### 퀵정렬
- 기준 데이터 (pivot)를 설정하고 그 기준보다 큰 데이터와 작은 데이터의 위치를 바꾸는 방법
- 가장 기본적인 퀵 정렬은 첫 번째 원소를 기준 데이터로 설정
- best - O(nlog2n), worst - O(n^2)
- 피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
- 실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음.

```js
    // 1. 메모리를 추가사용해서 구현
    let arr = [55, 55, 6, 7, 10, 1, 10]

    function quickSort(arr) {
        let n = arr.length
        if(n < 2) return arr

        let pivot = arr.shift()
        let left = []
        let right = []

        for(let i = 0; i< arr.length; i++) {
            if(arr[i] < pivot) left.push(arr[i])
            else right.push(arr[i])
        }
        console.log(`left : ${left}, pivot : ${pivot}, right: ${right}`)
        return quickSort(left).concat(pivot, quickSort(right));
    }

    quickSort(arr)
```
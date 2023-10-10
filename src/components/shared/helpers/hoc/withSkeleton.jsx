import Skeleton from '../../Skeleton/Skeleton.jsx'

export function withSkeleton(Component, type, count, direction) {
    return function WithSkeleton(props) {
        const {isLoading, ...restProps} = props

        if (isLoading) {
            return <Skeleton
                type={type}
                count={count}
                direction={direction}
            />
        }

        return <Component {...restProps} />
        // если загрузки нет вернем компоненту и сюда передаем все пропсы кроме isLoading
    }
};

/*
- withSkeleton -- это ХОК это функция-обёртка, принимает в параметрах то чем надо наделить компонент
- возвращает новый компонент WithSkeleton
 */

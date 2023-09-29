import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'
import styles from './alert.module.scss'
import { CheckedCircleSVG, ErrorSVG, classNames } from '@amatelas/tools'

type AlertsPosition = 'top' | 'bottom'
type AlertVariant = 'info' | 'danger' | 'warning' | 'success'

type AlertSource = {
  id: string
  variant: AlertVariant
  message: string
}

interface AlertsProps extends AmatelasBaseProps {
  position?: AlertsPosition
  alerts?: AlertSource[]
  setAlerts?: React.Dispatch<React.SetStateAction<AlertSource[]>>
}

interface AlertProps extends AmatelasBaseProps {
  variant?: AlertVariant
  onClickDelete?: React.MouseEventHandler<SVGSVGElement>
}

const getVariantClass = (variant?: AlertVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}

const Alert = (props: AlertProps) => {
  const variantClass = getVariantClass(props.variant)
  return (
    <div className={classNames(styles['alert'], variantClass)}>
      <div>
        <div className={styles['label']}>
          <ErrorSVG className={styles['label-icon']} />{' '}
          <span className={styles['label-content']}>Warning</span>
        </div>
        <div>{props.children}</div>
      </div>
      <div className={styles['delete']}>
        <CheckedCircleSVG
          onClick={props.onClickDelete}
          className={styles['delete-icon']}
        />
      </div>
    </div>
  )
}

const getPositionClass = (position?: AlertsPosition) => {
  if (position) {
    return styles[`position-${position}`]
  }

  return styles['position-top']
}

export const Alerts = (props: AlertsProps) => {
  const positionClass = getPositionClass(props.position)
  return (
    <div className={classNames(styles['alerts'], positionClass)}>
      {props.alerts?.map((alert) => {
        const id = alert.id
        return (
          <Alert
            onClickDelete={() => {
              if (props.setAlerts) {
                props.setAlerts((prev) => {
                  return prev.filter((alert) => {
                    return alert.id !== id
                  })
                })
              }
            }}
            key={alert.id}
            variant={alert.variant}
          >
            {alert.message}
          </Alert>
        )
      })}
    </div>
  )
}

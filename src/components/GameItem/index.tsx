import { Download } from '@styled-icons/boxicons-solid'
import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo,
}: GameItemProps) => (
  <S.Container>
    <S.GameContent>
      <S.GameImage>
        <img src={img} alt={title} />
      </S.GameImage>

      <S.GameInfo>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.Downloadlink
              href={downloadLink}
              aria-label={`Get ${title} here`}
              target="_blank"
            >
              <Download size={22} />
            </S.Downloadlink>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.GameInfo>
    </S.GameContent>

    {!!paymentInfo && (
      <S.PaymentContent>
        <p>{paymentInfo.purchaseDate}</p>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <img src={paymentInfo.img} alt={paymentInfo.flag} />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Container>
)

export default GameItem

import * as React from 'react'
import CommentSectionComponent from './components/CommentSectionComponent/Index'
import GlobalProvider from './context/Provider'
import './Index.scss'

interface CommentSectionProps {
  currentUser: {
    currentUserId: string
    currentUserImg: string
    currentUserProfile: string
    currentUserFullName: string
  } | null
  replyTop?: boolean
  customImg?: string
  inputStyle?: object
  formStyle?: object
  submitBtnStyle?: object
  cancelBtnStyle?: object
  overlayStyle?: object
  imgStyle?: object
  replyInputStyle?: object
  commentsCount?: number
  hrStyle?: object
  titleStyle?: object
  onSubmitAction?: Function
  onDeleteAction?: Function
  onReplyAction?: Function
  onEditAction?: Function
  customNoComment?: Function
  currentData?: Function
  removeEmoji?: boolean
  advancedInput?: boolean
  placeHolder?: string
  showTimestamp?: boolean
  commentData: Array<{
    userId: string
    comId: string
    fullName: string
    avatarUrl: string
    text: string
    userProfile?: string
    timestamp?: string
    replies?:
      | Array<{
          userId: string
          comId: string
          fullName: string
          avatarUrl: string
          text: string
          timestamp?: string
          userProfile?: string
        }>
      | undefined
  }>
}

export const CommentSection = ({
  currentUser,
  customImg,
  inputStyle,
  formStyle,
  submitBtnStyle,
  cancelBtnStyle,
  overlayStyle,
  replyInputStyle,
  imgStyle,
  replyTop,
  commentsCount,
  commentData,
  placeHolder,
  showTimestamp,
  hrStyle,
  titleStyle,
  removeEmoji,
  onSubmitAction,
  onDeleteAction,
  onReplyAction,
  onEditAction,
  customNoComment,
  currentData,
  advancedInput
}: CommentSectionProps) => {
  return (
    <GlobalProvider
      currentUser={currentUser}
      replyTop={replyTop}
      customImg={customImg}
      inputStyle={inputStyle}
      formStyle={formStyle}
      submitBtnStyle={submitBtnStyle}
      cancelBtnStyle={cancelBtnStyle}
      replyInputStyle={replyInputStyle}
      imgStyle={imgStyle}
      commentsCount={commentsCount}
      commentData={commentData}
      onSubmitAction={onSubmitAction}
      onDeleteAction={onDeleteAction}
      onReplyAction={onReplyAction}
      onEditAction={onEditAction}
      currentData={currentData}
      removeEmoji={removeEmoji}
      advancedInput={advancedInput}
      placeHolder={placeHolder}
    >
      <CommentSectionComponent
        overlayStyle={overlayStyle}
        hrStyle={hrStyle}
        titleStyle={titleStyle}
        customNoComment={customNoComment}
        showTimestamp={showTimestamp}
      />
    </GlobalProvider>
  )
}

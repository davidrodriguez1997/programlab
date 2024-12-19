$(document).ready(function() {
  // Submit a post
  $('#submit-post').click(function() {
    const postContent = $('#post-content').val();
    if (postContent.trim() !== "") {
      const postHTML = `
        <div class="post">
          <p class="post-text">${postContent}</p>
          <button class="like-btn">Like <span class="like-count">0</span></button>
          <div class="comment-section">
            <textarea class="comment-input" placeholder="Write a comment..."></textarea>
            <button class="submit-comment">Post Comment</button>
            <div class="comments"></div>
          </div>
        </div>
      `;
      $('#feed').prepend(postHTML);  // Add new post at the top of the feed
      $('#post-content').val('');    // Clear the textarea
    }
  });

  // Like button functionality (allow one like per user)
  $('#feed').on('click', '.like-btn', function() {
    const likeButton = $(this);
    const likeCount = likeButton.find('.like-count');
    
    // Check if the user has already liked the post
    if (!likeButton.hasClass('liked')) {
      let count = parseInt(likeCount.text());
      likeCount.text(count + 1);
      likeButton.addClass('liked');  // Mark this post as liked by the user
    } else {
      alert("You can only like this post once.");
    }
  });

  // Submit a comment
  $('#feed').on('click', '.submit-comment', function() {
    const commentText = $(this).siblings('.comment-input').val();
    if (commentText.trim() !== "") {
      const commentHTML = `<div class="comment"><p>${commentText}</p><button class="reply-btn">Reply</button></div>`;
      $(this).siblings('.comments').append(commentHTML);  // Append comment to the post
      $(this).siblings('.comment-input').val('');  // Clear the comment input
    }
  });

  // Reply to a comment
  $('#feed').on('click', '.reply-btn', function() {
    const replyFormHTML = `
      <div class="reply-form">
        <textarea class="reply-input" placeholder="Write a reply..."></textarea>
        <button class="submit-reply">Post Reply</button>
      </div>
    `;
    $(this).parent().append(replyFormHTML);  // Show reply form
  });

  // Submit a reply to a comment
  $('#feed').on('click', '.submit-reply', function() {
    const replyText = $(this).siblings('.reply-input').val();
    if (replyText.trim() !== "") {
      const replyHTML = `<div class="reply"><p>${replyText}</p></div>`;
      $(this).parent().append(replyHTML);  // Add the reply below the comment
      $(this).siblings('.reply-input').val('');  // Clear the reply input
      $(this).remove();  // Remove the reply form
    }
  });
});

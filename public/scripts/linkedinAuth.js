

// Initialize Supabase client
const supabaseUrl = 'https://fojxxbnnoynpnpkvwkxj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvanh4Ym5ub3lucG5wa3Z3a3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3Mzc1OTAsImV4cCI6MjAzMjMxMzU5MH0.YHeH0l0XZqz5EtNUFwtbzSYulEGNoLY77XoKr7Jf2Yw';
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to handle LinkedIn login
async function loginWithLinkedIn() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'linkedin',
  });
  if (error) {
    console.error('Error logging in with LinkedIn:', error.message);
  } else {
    console.log('Redirecting to LinkedIn for authentication');
  }
}

// Add event listener to login button
document.querySelector(".facebook").addEventListener('click', loginWithLinkedIn);
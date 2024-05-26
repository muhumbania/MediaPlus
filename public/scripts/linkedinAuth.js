const supabasee = supabase.createClient(supabaseUrl, supabaseKey);

// Function to handle LinkedIn login
async function loginWithLinkedIn() {
    const { error } = await supabasee.auth.signInWithOAuth({
        provider: 'linkedin_oidc',
    });
    if (error) {
        console.error('Error logging in with LinkedIn:', error.message);
    } else {
        console.log('Redirecting to LinkedIn for authentication');
    }
}

// Add event listener to login button
document.querySelector(".facebook").addEventListener('click', loginWithLinkedIn);
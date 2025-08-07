import sys
import re
from datetime import datetime

def validate_email(email):
    if '@' not in email:
        return False
    
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(email_pattern, email) is not None

def validate_name(name):
    return len(name.strip()) >= 2

def process_form_data(name, email):
    print("="*50)
    print("FORM DATA PROCESSOR")
    print("Software Testing Intern Assignment")
    print("="*50)
    
    if not validate_name(name):
        print("❌ ERROR: Invalid name provided")
        return False
    
    if not validate_email(email):
        print("❌ ERROR: Invalid email provided")
        return False
    
    print("✅ Validation successful!")
    print(f"📝 Received data: Name - {name}, Email - {email}")
    print(f"⏰ Processing time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("="*50)
    
    return True

def main():
    print("🚀 Starting Form Data Processor...")
    print("-" * 40)
    
    try:
        name = input("Enter your name: ").strip()
        email = input("Enter your email: ").strip()
        
        success = process_form_data(name, email)
        
        if success:
            print("\n✨ Form data processed successfully!")
        else:
            print("\n❌ Form data processing failed!")
            
    except KeyboardInterrupt:
        print("\n\n⚠️  Process interrupted by user")
    except Exception as e:
        print(f"\n❌ An error occurred: {str(e)}")

def demo_mode():
    print("Running in DEMO mode with test data...")
    print("-" * 40)
    
    test_cases = [
        ("John Doe", "john.doe@example.com"),
        ("Jane Smith", "jane.smith@websites.co.in"),
        ("", "invalid@email"),  
        ("Valid Name", "invalid-email"), 
    ]
    
    for i, (name, email) in enumerate(test_cases, 1):
        print(f"\n🧪 Test Case {i}:")
        print(f"Name: '{name}', Email: '{email}'")
        process_form_data(name, email)
        print("-" * 30)

if __name__ == "__main__":
    print("🌟 WEBSITES.CO.IN - FORM PROCESSOR")
    print("Software Testing Intern Assignment\n")
    
    if len(sys.argv) > 1 and sys.argv[1] == "--demo":
        demo_mode()
    else:
        main()
